from rest_framework.views import APIView
from rest_framework.response import Response
from .faqs import FAQ

class ChatbotView(APIView):
    def post(self, request):
        user_message = request.data.get("message", "").lower()
        print(f"Received message: {user_message}")  # Debugging

        for question, answer in FAQ.items():
            if user_message in question.lower():
                print(f"Matched question: {question}")  # Debugging
                return Response({"message": answer})

        print("No match found, sending default response.")
        return Response(
            {"message": "Sorry, I don't have an answer to that question. Please contact support @support service."}
        )

