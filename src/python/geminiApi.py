from apikey import AIzaSyBzS-4cuUfCJk0aDM8npw1i2MXTgEQ7-ag 
import google.generativeai as genai

# Configuración de la API
genai.configure(api_key=AIzaSyBzS-4cuUfCJk0aDM8npw1i2MXTgEQ7-ag )
model = genai.GenerativeModel("gemini-1.5-flash")

def chat_with_gemini():
    print("Bienvenido al chat con Gemini. Escribe '/exit' para volver al menú principal.")
    
    while True:
        # Solicitar input al usuario
        user_input = input(">>> ")
        
        # Verificar si el usuario desea salir
        if user_input.strip().lower() == "/exit":
            print("Volviendo al menú principal...")
            break
        
        # Generar la respuesta de Gemini
        response = model.generate_content(user_input)
        print(response.text)
        print()  # Espacio para mayor claridad

# Ejemplo de cómo ejecutar esta función
if _name_ == "_main_":
    chat_with_gemini()