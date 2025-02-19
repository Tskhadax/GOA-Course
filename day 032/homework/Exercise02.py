#Code Wars
def rain_amount(mm):
    if mm >= 40:
        return"Your plant has had more than enought water"
    elif mm < 40:
        return f"you need to give your plant {40-mm}"