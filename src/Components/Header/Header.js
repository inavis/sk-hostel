import "./Header.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export function Header() {
  return (
    <ErrorBoundary>
      <h1>Header</h1>
    </ErrorBoundary>
  );
}
