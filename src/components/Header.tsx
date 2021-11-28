import { Center, Flex, HStack, StackProps } from "@chakra-ui/layout"
import { faChartPie, faStore } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import { useWeb3Context } from "web3-react"
import Button from "./Button"
import AddressInfo from "./wallet/AddressInfo"

export const Header = () => {
  const history = useHistory()
  const location = useLocation()
  const context = useWeb3Context()

  return (
    <Flex {...containerStyles}>
      <HStack justifyContent="flex-end" align="center" spacing={6}>
        {context.library && (
          <>
            <AddressInfo />
          </>
        )}
      </HStack>
    </Flex>
  )
}

export const headerHeight = 51

const containerStyles: StackProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justify: "space-between",
  alignItems: "center",
  borderBottom: "solid 1px",
  borderColor: "gray.300",
  bgColor: "white !important",
  height: headerHeight,
  position: "fixed",
  w: "100vw",
  zIndex: 1,
}

export default Header
