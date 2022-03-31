import React from 'react'
import {Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button} from "./Total.styles";

function Total() {
  return (
    <Summary>
    <SummaryTitle>Order Summary</SummaryTitle>
    <SummaryItem>
      <SummaryItemText>Subtotal</SummaryItemText>
      <SummaryItemPrice>$ 68</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
      <SummaryItemText>Estimated Shipping</SummaryItemText>
      <SummaryItemPrice>$ 5.90</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
      <SummaryItemText>Shipping Discount</SummaryItemText>
      <SummaryItemPrice>$ -5.90</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem type="total">
      <SummaryItemText>Total</SummaryItemText>
      <SummaryItemPrice>$ 68</SummaryItemPrice>
    </SummaryItem>
    <Button>Checkout Now</Button>
  </Summary>
  )
}

export default Total