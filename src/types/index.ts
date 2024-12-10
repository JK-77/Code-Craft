import * as monaco from "monaco-editor";
import { Id } from "../../convex/_generated/dataModel";

// Theme interface
export interface Theme {
  id: string;
  label: string;
  color: string;
}

// Language runtime interface
export interface LanguageRuntime {
  language: string;
  version: string;
}

// Language interface
export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

// Response structure for code execution
export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

// Result of a code execution
export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

// State management interface for the code editor
export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  theme: string;
  fontSize: number;
  editor: monaco.editor.IStandaloneCodeEditor | null; // Correct type for Monaco editor instance
  executionResult: ExecutionResult | null;

  // State management methods
  setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  getCode: () => string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  runCode: () => Promise<void>;
}

// Snippet interface representing stored code snippets
export interface Snippet {
  _id: Id<"snippets">;
  _creationTime: number;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
}
