import { getRequest } from "../network/Network";
import { APPROVED_LIST } from '../network/Urls'

export function getApprovedFoodList() {
    return getRequest(APPROVED_LIST)
}