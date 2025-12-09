import axios from "axios";
import Storage from "./storage";

const API = 'https://preguntados-api.vercel.app/api';

const apiClient = axios.create({
    baseURL: API,
});

// Función para las preguntas
export const getQuestions = async (difficulty) => {
    try {
        const response = await apiClient.get(`/questions?difficulty=${difficulty}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
};

// Función para las dificultades
export const getDifficulties = async () => {
    try {
        const response = await apiClient.get(`/difficulty`);
        return response.data;
    } catch (error) {
        console.error("Error fetching difficulties:", error);
        throw error;
    }
};

// Función para las respuestas
export const getAnswer = async (question, optionAnswer) => {
        try {
        const response = await apiClient.post(`/answer`, { questionId: question, option: optionAnswer });
        return response.data; 
    } catch (error) {
        console.error("Error fetching answers:", error);
        throw error;
    }
};