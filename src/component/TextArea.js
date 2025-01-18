function TextArea() {
  return (
    <>
      <label className="flex w-full mt-3 flex-col col-span-2 row-span-2">Message
      <textarea className="block flex-grow w-full rounded-xl border-2 p-3 " required></textarea>
      </label>
    </>
  );
}

export default TextArea;
