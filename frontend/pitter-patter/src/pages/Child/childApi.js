import { childApi } from "/src/apiService.js";

export const childPhysicalInfoListGet = async (childId, token) => {
    const response = await childApi.get(`/${childId}/physical/list`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const childPhysicalInfoRegist = async (childId, token, data) => {
    const response = await childApi.post(`/${childId}/physical`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

export const childPhysicalInfoUpdate = async (childId, token, data) => {
    const response = await childApi.patch(`/${childId}/physical`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};