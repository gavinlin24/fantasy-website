import time
from functools import wraps

_cache = {}

def get_cache(key):
    if key in _cache:
        value, expiry = _cache[key]
        if time.time() < expiry:
            return value
        del _cache[key]
    return None

def set_cache(key, value, minutes=5):
    expiry = time.time() + (minutes * 60)
    _cache[key] = (value, expiry)

def cached(minutes=5):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            cache_key = f"{func.__name__}"
            
            cached_value = get_cache(cache_key)
            if cached_value is not None:
                print(f"Using cached {func.__name__}")
                return cached_value
            
            print(f"Calling API for {func.__name__}")
            result = func(*args, **kwargs)
            set_cache(cache_key, result, minutes)
            return result
        return wrapper
    return decorator