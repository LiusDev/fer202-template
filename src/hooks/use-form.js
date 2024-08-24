import { useState } from "react"

const useForm = (initialValues, validationRules) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })

        if (validationRules && validationRules[name]) {
            const error = validationRules[name](value)
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error || "",
            }))
        }
    }

    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        if (validationRules) {
            const newErrors = {}
            Object.keys(validationRules).forEach((key) => {
                const error = validationRules[key](values[key])
                if (error) {
                    newErrors[key] = error
                }
            })

            setErrors(newErrors)

            if (Object.keys(newErrors).length === 0) {
                onSubmit(values)
            }
        } else {
            onSubmit(values)
        }

        setIsSubmitting(false)
    }

    const reset = () => {
        setValues(initialValues)
        setErrors({})
        setIsSubmitting(false)
    }

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        reset,
    }
}

export default useForm
