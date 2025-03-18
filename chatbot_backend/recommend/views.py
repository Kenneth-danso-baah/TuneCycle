from rest_framework.views import APIView
from rest_framework.response import Response
from sentence_transformers import SentenceTransformer
import faiss

import numpy as np

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

class RecommendSongs(APIView):
    pass