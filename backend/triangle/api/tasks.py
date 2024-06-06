from celery import shared_task
from random import randrange
from faker import Faker
from .models import TestModel
from time import sleep

fake = Faker()


@shared_task
def random_digit():
    sleep(15)
    digit = randrange(100_000, 10_000_000)
    name = fake.name()
    test_model = TestModel()
    test_model.test_field_1 = name
    test_model.test_field_2 = digit
    test_model.save()
