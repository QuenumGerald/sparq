# Sparq

Sparq is a noncustodial lending protocol implemented for the Ethereum Virtual Machine.
Sparq offers a new trustless primitive with increased efficiency and flexibility compared to existing lending platforms.
It provides permissionless risk management and permissionless market creation with oracle agnostic pricing.
It also enables higher collateralization factors, improved interest rates, and lower gas consumption.
The protocol is designed to be a simple, immutable, and governance-minimized base layer that allows for a wide variety of other layers to be built on top.
Sparq also offers a convenient developer experience with a singleton implementation, callbacks, free flash loans, and account management features.


## Repository Structure

[`Morpho.sol`](./src/Morpho.sol) contains most of the source code of the core contract of Sparq.
It solely relies on internal libraries in the [`src/libraries`](./src/libraries) subdirectory.

Libraries in the [`src/libraries/periphery`](./src/libraries/periphery) directory are not used by Sparq.
They are useful helpers that integrators can reuse or adapt to their own needs.

The [`src/mocks`](./src/mocks) directory contains contracts designed exclusively for testing.

You'll find relevant comments in [`IMorpho.sol`](./src/interfaces/IMorpho.sol), notably a list of requirements about market dependencies.

## Getting Started

Install dependencies: `yarn`

Run forge tests: `yarn test:forge`

Run hardhat tests: `yarn test:hardhat`

You will find other useful commands in the [`package.json`](./package.json) file.

## Audits

All audits are stored in the [audits](./audits/)' folder.

## Licences

The primary license for Sparq is the Business Source License 1.1 (`BUSL-1.1`), see [`LICENSE`](./LICENSE).
However, all files in the following folders can also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers): [`src/interfaces`](./src/interfaces), [`src/libraries`](./src/libraries), [`src/mocks`](./src/mocks), [`test`](./test), [`certora`](./certora).
