/*
 * VisitPage function component renders a list of links using JSX.
 * Each link is wrapped in a button element within an anchor tag for navigation.
 * The list provides quick access to various pages in the application.
 *
 * Concepts used:
 * - React functional components
 * - JSX syntax for defining UI elements
 * - Semantic HTML for accessibility and SEO
 * - Anchor tags for navigation
 *
 * Suggested Improvements:
 * - Replace anchor tags with Next.js Link component for client-side navigation for better performance.
 * - Improve styling for buttons and links using Tailwind CSS or another styling solution.
 * - Consider organizing the list items into a more structured layout for better readability.
 * - Implement active states or styling to indicate the current page or selection.
 */

function VisitPage() {
  return (
    <>
      <ul className="text-2xl">
        <li>
          <a href="/register">
            <button className="">
              <u>/register</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/login">
            <button className="">
              <u>/login</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/calculator">
            <button className="">
              <u>/calculator</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/box">
            <button className="">
              <u>/reduxBoxComponent</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/eventHandle">
            <button className="">
              <u>/eventHandle</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/formikRegister">
            <button className="">
              <u>/formikRegister</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/formikLogin">
            <button className="">
              <u>/formikLogin</u>
            </button>
          </a>
        </li>
        <li>
          <a href="/yupformik">
            <button className="">
              <u>/yupformik-form-Page</u>
            </button>
          </a>
        </li>
      </ul>
    </>
  );
}

/*
 * Home function component serves as the main landing page of the application.
 * It includes a welcome message and renders the VisitPage component.
 *
 * Concepts used:
 * - React functional components
 * - JSX syntax for defining UI elements
 *
 * Suggested Improvements:
 * - Add more content or features to enhance user engagement.
 * - Implement a responsive design for better usability on different devices.
 * - Consider adding a footer or navigation bar for easier navigation within the application.
 */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-3">
      <div>
        <h1 className="text-5xl p-2">Welcome to my-app!</h1>
      </div>
      <div>
        <VisitPage />
      </div>
    </main>
  );
}
