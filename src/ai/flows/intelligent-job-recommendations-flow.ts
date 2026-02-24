'use server';
/**
 * @fileOverview An AI agent that provides intelligent job recommendations for workers.
 *
 * - intelligentJobRecommendations - A function that handles the job recommendation process.
 * - IntelligentJobRecommendationsInput - The input type for the intelligentJobRecommendations function.
 * - IntelligentJobRecommendationsOutput - The return type for the intelligentJobRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the schema for a single available job
const AvailableJobSchema = z.object({
  id: z.string().describe('Unique identifier for the job.'),
  title: z.string().describe('The title of the job.'),
  description: z.string().describe('A detailed description of the job requirements and tasks.'),
  budget: z.string().describe('The budget or payment terms for the job (e.g., "$500 fixed price", "$25/hour").'),
  location: z.string().describe('The location requirement for the job (e.g., "Remote", "New York, NY").'),
  requiredSkills: z.array(z.string()).describe('A list of skills required for the job.'),
});

// Define the input schema for job recommendations
const IntelligentJobRecommendationsInputSchema = z.object({
  workerSkills: z.array(z.string()).describe('A list of skills the worker possesses (e.g., "React", "Node.js", "UI/UX Design").'),
  workerExperience: z.string().describe('A concise description of the worker\'s professional experience and background.'),
  workerPreferences: z.string().describe('A description of the worker\'s job preferences (e.g., "prefers remote work", "interested in full-time projects", "seeks opportunities in FinTech").'),
  availableJobs: z.array(AvailableJobSchema).describe('A list of currently available jobs from which to recommend.'),
});
export type IntelligentJobRecommendationsInput = z.infer<typeof IntelligentJobRecommendationsInputSchema>;

// Define the schema for a single recommended job
const RecommendedJobSchema = z.object({
  id: z.string().describe('The unique identifier of the recommended job, matching one from the availableJobs.'),
  title: z.string().describe('The title of the recommended job.'),
  budget: z.string().describe('The budget for the recommended job.'),
  location: z.string().describe('The location of the recommended job.'),
  matchingSkills: z.array(z.string()).describe('Skills from the worker that directly match the job requirements.'),
  relevanceScore: z.number().min(0).max(10).describe('A score from 0 (least relevant) to 10 (most relevant) indicating how well this job matches the worker\'s profile.'),
  reasoning: z.string().describe('A brief, one-sentence explanation of why this job is recommended for the worker.'),
});

// Define the output schema for job recommendations
const IntelligentJobRecommendationsOutputSchema = z.object({
  recommendedJobs: z.array(RecommendedJobSchema).describe('A list of jobs recommended for the worker, sorted by relevance score in descending order.'),
});
export type IntelligentJobRecommendationsOutput = z.infer<typeof IntelligentJobRecommendationsOutputSchema>;

// The wrapper function that calls the Genkit flow
export async function intelligentJobRecommendations(
  input: IntelligentJobRecommendationsInput
): Promise<IntelligentJobRecommendationsOutput> {
  return intelligentJobRecommendationsFlow(input);
}

// Define the Genkit prompt for job recommendations
const recommendJobsPrompt = ai.definePrompt({
  name: 'recommendJobsPrompt',
  input: { schema: IntelligentJobRecommendationsInputSchema },
  output: { schema: IntelligentJobRecommendationsOutputSchema },
  prompt: `You are an intelligent job recommendation engine for a freelancing platform called WorkWave. Your task is to recommend the most suitable jobs to a worker based on their profile and a list of available jobs.\n\n**Worker Profile:**\n- Skills: {{{workerSkills}}}\n- Experience: {{{workerExperience}}}\n- Preferences: {{{workerPreferences}}}\n\n**Available Jobs (JSON array):**\n{{{JSON.stringify availableJobs}}}\n\nPlease analyze the worker's skills, experience, and preferences against the available jobs. Identify the top 3 to 5 most relevant jobs. For each recommended job, you must provide its 'id', 'title', 'budget', 'location', 'matchingSkills' (skills from the worker that are required by the job), a 'relevanceScore' from 0 to 10, and a concise 'reasoning' (one sentence) explaining why it's a good match.\n\nEnsure the output is a JSON object matching the IntelligentJobRecommendationsOutputSchema, with 'recommendedJobs' as an array of job objects, sorted by 'relevanceScore' in descending order.`,
});

// Define the Genkit flow for job recommendations
const intelligentJobRecommendationsFlow = ai.defineFlow(
  {
    name: 'intelligentJobRecommendationsFlow',
    inputSchema: IntelligentJobRecommendationsInputSchema,
    outputSchema: IntelligentJobRecommendationsOutputSchema,
  },
  async (input) => {
    const { output } = await recommendJobsPrompt(input);
    if (!output) {
      throw new Error('Failed to generate job recommendations.');
    }
    return output;
  }
);
