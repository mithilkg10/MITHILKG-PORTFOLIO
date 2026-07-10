"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { logger } from "@/lib/logger";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("React Error Boundary Caught Exception:", {
      name: error.name,
      message: error.message,
      stack: errorInfo.componentStack,
    });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-2 font-mono text-lg font-semibold text-red-400">Application Error</h2>
          <p className="text-sm text-foreground/60">A critical error occurred while rendering this component.</p>
          <button
            className="mt-6 rounded-md bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
