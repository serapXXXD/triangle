from django.db import models


class TestModel(models.Model):
    test_field_1 = models.CharField(max_length=225, verbose_name='тестовое поле 1')
    test_field_2 = models.IntegerField(verbose_name='тестовое поле для числа')

    def __str__(self):
        return self.test_field_1, self.test_field_2

    class Meta:
        verbose_name = 'тестовое поле'
        verbose_name_plural = 'тестовые поля'
        ordering = ['id']
