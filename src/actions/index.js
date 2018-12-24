export const HANDLE_LANGUAGE_INPUT = "HANDLE_LANGUAGE_INPUT";

export const handleLanguageInput = (payload) => {
  return {
    type: HANDLE_LANGUAGE_INPUT,
    payload
  }
}