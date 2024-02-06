import { httpService } from "./http.service";
export const mediaService = {
    query,
    getById
}


const BASE_URL = process.env.NODE_ENV !== "development" ? "media" : "media";

async function query(filterBy) {
    try {
        const media = await httpService.get(BASE_URL, filterBy);
        return media
    } catch (err) {
        console.log("error:", err);
    }
}


async function getById(id) {
    try {
        return await httpService.get(BASE_URL + `/${id}`, id);
    } catch (err) {
        console.log("error:", err);
    }
}









