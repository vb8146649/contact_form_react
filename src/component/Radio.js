import { useState } from "react";

function Radio() {
  const [selected,setSelected]=useState("");
  return (
    <fieldset className="flex mt-3 gap-2 w-full col-span-2">
      <legend >
        Query
        <span className="text-green-600" aria-hidden="true">
          *
        </span>
      </legend>
      <label className={`w-full p-3 ${selected=="general"?"border-[hsl(169,82%,27%)] bg-[hsl(148,38%,91%)]":""} rounded-xl border-2 inline-block`}>
        <input
          className="inline accent-green-600  me-2"
          type="radio"
          name="radio"
          aria-describedby="required"
          onChange={()=>setSelected("general")}
        />
        General Enquiry
      </label>
      <label className={`w-full ${selected=="support"?"border-[hsl(169,82%,27%)] bg-[hsl(148,38%,91%)]":""} rounded-xl border-2 p-3 inline-block`}>
        <input
          className="inline me-2 accent-green-600"
          type="radio"
          name="radio"
          aria-describedby="required"
          onChange={()=>setSelected("support")}
        />
        Support Request
      </label>
    </fieldset>
  );
}

export default Radio;
