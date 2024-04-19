"use client";

export default function Error() {
  return (
    <>
      {/* classname from css no need to import  */}
      <main className="error">
        <h1>An error occured!</h1>
        <p>Failed to fetch meal data.</p>
      </main>
    </>
  );
}
