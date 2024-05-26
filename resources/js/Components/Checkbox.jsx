export default function Checkbox({ className = "", handleChange, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-alerange shadow-sm focus:ring-2 focus:ring-alerange ring-2 ring-alerange" +
                className
            }
            onChange={handleChange}
        />
    );
}
