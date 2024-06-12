export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({...props}) => {
    return (
        <input
          type="text"
          className="flex w-full h-10 rounded-md border border-b bg-background-light text-sm ring-offset-background-chat placeholder:text-gray focus-visible:ring-background-light focus-visible:ring-offset-2 disabled:bg-background-light disabled:cursor-not-allowed disabled:opacity-50 p-6 text-gray"
          {...props}
        />
    )
}
Input.displayName = 'Input';

export { Input }