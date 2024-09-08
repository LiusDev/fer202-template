import { useContext } from "react"
import { ModalsContext } from "../context/ModalsContext"

const useModals = () => {
    /**
     * @type {{
     *  showModals: ({ title: string, children: React.ReactNode, footer?: React.ReactNode }) => void
     * }}
     */
    const modals = useContext(ModalsContext)

    return {
        show: modals.showModals,
        hide: modals.hideModals,
    }
}

export default useModals
