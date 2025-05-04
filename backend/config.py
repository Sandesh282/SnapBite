class Config:
    RESPONSE_TIMEOUT = 2
    BASE_URL = "https://snapbite.com"
    API_KEY = "snapbite-demo-key"

    @classmethod
    def update_response_timeout(cls, new_timeout):
        cls.RESPONSE_TIMEOUT = new_timeout

    @classmethod
    def update_base_url(cls, new_url):
        cls.BASE_URL = new_url

    @classmethod
    def update_api_key(cls, new_api_key):
        cls.API_KEY = new_api_key
