import { useState } from "react"

let status = false

export const editStatus = (temp) => {
    status = temp
}

export const getStatus = () => {
    return status
}