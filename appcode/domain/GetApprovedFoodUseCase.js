import { getApprovedFood } from "../data/Repository"

export default class GetApprovedFoodUseCase {
    async getApprovedFood() {
        let response = await getApprovedFood()
        return response
    }
}