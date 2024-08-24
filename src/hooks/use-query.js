import { useState, useEffect, useCallback } from "react"
import { instance } from "../utils"

export default function useQuery(url) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const handleError = (error) => {
        setError(error.response?.data.err)
        setLoading(false)
    }

    const runQuery = useCallback(() => {
        const handleSuccess = (res) => {
            setData(res.data)
            setLoading(false)
        }

        setLoading(true)
        instance.get(url).then(handleSuccess).catch(handleError)
    }, [url])

    useEffect(() => {
        runQuery()
    }, [runQuery])

    return { data, loading, error, refetch: runQuery }
}
