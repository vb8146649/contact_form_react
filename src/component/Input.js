function Input({inline=false , autoComplete=true, type="text",row="row-span-1",col="col-span-1", ...props}) {
    return ( 
        <label htmlFor={props.name} className={`w-full inline-block mt-3 ${col} ${row}`}>
        {props.label}
        <span className="text-green-600" aria-hidden="true">
          *
        </span>
        <input
          className="border-2 focus:border-[hsl(169,82%,27%)] outline-none rounded-xl p-2 w-full"
          type={type}
          name={props.name}
          id={props.name}
          aria-describedby="required"
          autoComplete={autoComplete?props.name:""}
          required
        />
      </label>
     );
}

export default Input;