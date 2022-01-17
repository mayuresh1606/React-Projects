class RomanNumerals:

    def to_roman(val):
        # for value in val:
        #     if value
        return ''

    def from_roman(roman_num):
        total = 0
        for value in roman_num:
            if value == 'I':
                value = 1
            elif value == 'V':
                value = 5
            elif value == 'X':
                value = 10
            elif value == 'L':
                value = 50
            elif value == 'C':
                value = 100
            elif value == 'D':
                value = 500
            elif value == 'M':
                value = 1000
            total += value
        return total


print(RomanNumerals.from_roman("CLII"))
