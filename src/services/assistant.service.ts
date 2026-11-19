import type { AppConfig } from '../config/env.ts';

import type { AskResult } from '../contracts/ask.ts';

import {
  generateMockAnswer
} from '../ai/mock.js';

import {
  generateOpenRouterAnswer
} from '../ai/openrouter.js';

// Contrato del servicio

export type AssistantService = (
  question: string
) => Promise<AskResult>;

// Construcción del servicio

export function createAssistantService(
  config: AppConfig
): AssistantService {

  return async (question: string): Promise<AskResult> => {

    if (config.AI_EXECUTION_MODE === 'mock') {

      return generateMockAnswer();

    }

    return generateOpenRouterAnswer(
      question,
      config
    );
  };
}