import { IWallet } from '../wallet/types';
import { NetworkName } from '../network/types';
import { BaseMessage } from '@langchain/core/messages';
import { NetworksConfig } from '../network/types';
import { BaseTool } from './tools/BaseTool';
import { IPlugin } from '../plugin/types';
import { UserEntity, UUID } from '../types';
import { DatabaseAdapter } from '../storage';
import { IToolExecutionCallback } from './callbacks';

export interface AgentConfig {
  model: string;
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
  character?: string;
}

export interface AgentContext {
  user?: UserEntity | null;
}

export interface AgentExecuteParams {
  input: string;
  history?: BaseMessage[];
  threadId?: UUID;
}

export interface IAgent {
  /**
   * Register a tool with the agent
   */
  registerTool(tool: BaseTool): Promise<void>;

  /**
   * Register a plugin with the agent
   */
  registerPlugin(plugin: IPlugin): Promise<void>;

  /**
   * Get a registered plugin by name
   */
  getPlugin(name: string): IPlugin | undefined;

  /**
   * Register a callback for tool execution events
   */
  registerToolExecutionCallback(callback: IToolExecutionCallback): void;

  /**
   * Unregister a callback for tool execution events
   */
  unregisterToolExecutionCallback(callback: IToolExecutionCallback): void;

  /**
   * Execute a command using the agent's tools
   */
  execute(command: string): Promise<any>;

  execute(params: AgentExecuteParams): Promise<string>;
  getWallet(): IWallet;
  getNetworks(): NetworksConfig['networks'];
  registerDatabase(db: DatabaseAdapter): Promise<void>;
}
