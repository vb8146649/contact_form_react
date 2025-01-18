function Consent() {
    return ( 
        <label className="mt-3 w-full col-span-25 row-span-1 content-center">
            <input className="checked:bg-[hsl(169,82%,27%)] accent-green-600 border-2 me-3" type="checkbox" name="consent" required/>
            I consent to being contacted by the team
        <span className="text-green-600" aria-hidden="true">
          *
        </span>
        </label>
     );
}

export default Consent;