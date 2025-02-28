import { ethers } from "ethers"
import { Interface } from "ethers/lib/utils"
import { CHAIN_CONSTANTS, DelegateRegistryAddress } from "src/config/constants"

export const delegateRegistryInterface = new Interface([
  "function delegation(bytes32, bytes32) public view returns (address)",
  "function setDelegate(bytes32 id, address delegate) public",
])
export const createDelegateTx = (delegateAddress: string, chainId: number) => {
  const chainConstants = CHAIN_CONSTANTS[chainId]

  // Add delegate tx if necessary
  const delegateId = ethers.utils.formatBytes32String(
    chainConstants.DELEGATE_ID
  )
  const delegateData = delegateRegistryInterface.encodeFunctionData(
    "setDelegate",
    [delegateId, delegateAddress]
  )

  return {
    to: DelegateRegistryAddress,
    value: "0",
    data: delegateData,
  }
}
