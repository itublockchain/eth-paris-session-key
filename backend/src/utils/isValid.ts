import { ethers } from 'ethers';
import { SealAbi } from 'src/constants/abi';
import { useProvider } from 'src/hooks/useProvider';

export const checkPublicKey = async (
    address: string,
    publicKey: string,
): Promise<boolean> => {
    const { getProvider } = useProvider();
    const provider = getProvider();
    const contract = new ethers.Contract(
        address.toLocaleLowerCase(),
        SealAbi.abi,
        provider,
    );

    const isPubKeyAvailable = await contract.validQs(
        '0x' + publicKey.toLocaleLowerCase(),
    );
    return isPubKeyAvailable;
};
