import time
import requests
from config import Config

def check_live_response():
    start = time.time()
    try:
        response = requests.get(Config.BASE_URL)
        response.raise_for_status()
    except Exception as e:
        print(f"Error reaching server: {e}")
        return
    end = time.time()

    elapsed = end - start

    if elapsed <= Config.RESPONSE_TIMEOUT:
        print(f"Response from server successful in {elapsed:.2f}s.")
    else:
        print(f"Response timeout: {elapsed:.2f}s.")

if __name__ == "__main__":
    check_live_response()
