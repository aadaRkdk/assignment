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
      </ul>
    </>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-3">
      <div>
        <h1 className="text-5xl p-2">Welcome to myapp!</h1>
      </div>
      <div>
        <VisitPage />
      </div>
    </main>
  );
}
