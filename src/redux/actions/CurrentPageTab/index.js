export const DashBoard = (data) => {

    return {
        type: "DASHBOARD",
        payload: data
    }
}

export const ProductTab = (data) => {

    return {
        type: "PROJECTTAB",
        payload: data
    }
}

export const BidTabs = (data) => {
    return {
        type: "BIDTAB",
        payload: data
    }
}

export const SponsorTab = (data) => {
    return {
        type: "SPONSORTAB",
        payload: data
    }
}