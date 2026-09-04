import dayjs from "dayjs";

export const formatDateTime = (createdAt: number) => {
    if (!createdAt) {
        return "";
    }
    
    return dayjs(createdAt).format("MMM D YYYY hh:mmA");
};