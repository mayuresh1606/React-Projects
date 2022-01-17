import string


def top_3_words(text):
    my_list = []
    newText = text.split()
    for text in newText:
        text_count = newText.count(text)
        if text_count >= 3:
            my_list_count = my_list.count(text)
            if my_list_count == 0:
                my_list.append(text)
    my_list.sort(reverse=True)
    return my_list


top_3_words('aldj aleke d d d d ee ee ee ... ... ...')

print(string.punctuation)
