'use server';
/**
 * @fileOverview A Genkit flow for generating comprehensive job descriptions based on hirer input.
 *
 * - generateJobDescription - A function that handles the job description generation process.
 * - GenerateJobDescriptionInput - The input type for the generateJobDescription function.
 * - GenerateJobDescriptionOutput - The return type for the generateJobDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateJobDescriptionInputSchema = z.object({
  jobTitle: z.string().describe('The title of the job position.'),
  responsibilities: z
    .array(z.string())
    .describe('A list of key responsibilities for the role.'),
  skills: z
    .array(z.string())
    .describe('A list of required skills and qualifications.'),
  experience: z
    .string()
    .describe('Desired experience level or additional qualifications.'),
});
export type GenerateJobDescriptionInput = z.infer<
  typeof GenerateJobDescriptionInputSchema
>;

const GenerateJobDescriptionOutputSchema = z.object({
  jobDescription: z.string().describe('The generated job description in markdown format.'),
});
export type GenerateJobDescriptionOutput = z.infer<
  typeof GenerateJobDescriptionOutputSchema
>;

export async function generateJobDescription(
  input: GenerateJobDescriptionInput
): Promise<GenerateJobDescriptionOutput> {
  return aiAssistedJobDescriptionGenerationFlow(input);
}

const aiAssistedJobDescriptionGenerationPrompt = ai.definePrompt({
  name: 'aiAssistedJobDescriptionGenerationPrompt',
  input: { schema: GenerateJobDescriptionInputSchema },
  output: { schema: GenerateJobDescriptionOutputSchema },
  prompt: `You are an expert HR professional and a master at crafting compelling and comprehensive job descriptions. Your goal is to write a detailed, attractive, and professional job posting that will entice top talent.

Based on the provided details, generate a job description that includes the following sections:
1.  **Job Title:** Prominently display the job title.
2.  **About the Role:** A brief, engaging introduction to the position and its impact.
3.  **What You'll Do:** A bulleted list of key responsibilities.
4.  **What We're Looking For:** A bulleted list of required skills and qualifications.
5.  **Bonus Points:** (Optional, if '{{experience}}' suggests it) A section for desired experience or additional nice-to-have qualifications.
6.  **Why Join Us:** A short, enthusiastic closing statement encouraging applications.

Ensure the tone is professional yet inviting, and use clear, concise language. Format the entire job description using markdown.

---

**Job Details:**

Job Title: {{{jobTitle}}}

Key Responsibilities:
{{#each responsibilities}}
- {{{this}}}
{{/each}}

Required Skills:
{{#each skills}}
- {{{this}}}
{{/each}}

Desired Experience: {{{experience}}}

---

**Generated Job Description:**`,
});

const aiAssistedJobDescriptionGenerationFlow = ai.defineFlow(
  {
    name: 'aiAssistedJobDescriptionGenerationFlow',
    inputSchema: GenerateJobDescriptionInputSchema,
    outputSchema: GenerateJobDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await aiAssistedJobDescriptionGenerationPrompt(input);
    return output!;
  }
);
