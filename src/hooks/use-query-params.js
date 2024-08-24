import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

const useQueryParams = () => {
    const [searchParams] = useSearchParams()

    const queryParams = useMemo(() => {
        const params = {}
        Array.from(searchParams.entries()).forEach(([key, value]) => {
            params[key] = value
        })
        return params
    }, [searchParams])

    return queryParams
}

export default useQueryParams
