import { ICommand } from "./Command";
import { mintCommand } from "./token/mintTokenCommand";
import { sendTokenCommand } from "./token/sendTokenCommand";

export const CommandList: ICommand[] = [mintCommand, sendTokenCommand];
