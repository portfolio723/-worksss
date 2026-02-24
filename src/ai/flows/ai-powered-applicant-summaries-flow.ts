'use server';
/**
 * @fileOverview This file implements a Genkit flow for summarizing job applicants.
 * It takes an applicant's resume and a job description as input and provides
 * a concise summary of their key skills and relevant experience.
 *
 * - summarizeApplicant - A function that orchestrates the applicant summary process.
 * - SummarizeApplicantInput - The input type for the summarizeApplicant function.
 * - SummarizeApplicantOutput - The return type for the summarizeApplicant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeApplicantInputSchema = z.object({
  applicantResumeText: z
    .string()
    .describe("The full text content of the applicant's resume."),
  jobDescriptionText: z
    .string()
    .describe("The full text content of the job description."),
});
export type SummarizeApplicantInput = z.infer<typeof SummarizeApplicantInputSchema>;

const SummarizeApplicantOutputSchema = z.object({
  summary: z.string().describe("A concise summary of the applicant's key skills and relevant experience tailored to the job description."),
  keySkills: z.array(z.string()).describe("A list of key skills extracted from the applicant's resume that are relevant to the job."),
  relevantExperience: z.string().describe("A concise description of the applicant's experience most relevant to the job description."),
});
export type SummarizeApplicantOutput = z.infer<typeof SummarizeApplicantOutputSchema>;

const applicantSummaryPrompt = ai.definePrompt({
  name: 'applicantSummaryPrompt',
  input: { schema: SummarizeApplicantInputSchema },
  output: { schema: SummarizeApplicantOutputSchema },
  prompt: `You are an AI assistant specialized in analyzing job applications.
Your task is to review an applicant's resume and a job description to generate a concise summary highlighting their key skills and relevant experience for that specific role.

Focus only on information pertinent to the job description.

Applicant Resume:
{{applicantResumeText}}

Job Description:
{{jobDescriptionText}}

Based on the above, provide:
1. A general summary of the applicant's suitability.
2. A list of specific key skills that match the job requirements.
3. A concise summary of their relevant past work experience.

Ensure the output is in JSON format matching the SummarizeApplicantOutputSchema.`,
});

const summarizeApplicantFlow = ai.defineFlow(
  {
    name: 'summarizeApplicantFlow',
    inputSchema: SummarizeApplicantInputSchema,
    outputSchema: SummarizeApplicantOutputSchema,
  },
  async (input) => {
    const { output } = await applicantSummaryPrompt(input);
    return output!;
  }
);

export async function summarizeApplicant(
  input: SummarizeApplicantInput
): Promise<SummarizeApplicantOutput> {
  return summarizeApplicantFlow(input);
}
