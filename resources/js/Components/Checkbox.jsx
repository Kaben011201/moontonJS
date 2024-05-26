export default function Checkbox({ className = "", handleChange, checked = false, ...props }) {
    return (
        <input
            {...props}
            defaultChecked={checked}
            type="checkbox"
            className={
                "rounded border-gray-300 text-alerange shadow-sm focus:ring-2 focus:ring-alerange ring-2 ring-alerange" +
                className
            }
            onChange={handleChange}
        />
    );
}
