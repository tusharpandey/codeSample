import { getApprovedFoodList } from './CloudRepository/approvedFoodList/ApprovedFoodList'

export function getApprovedFood() {
    return getApprovedFoodList()
}