import { DialogChoiceNode, DialogNode } from "../nodes/types";

export class DialogHelper {
    // static async parseDialogNodesFromFile(file: File): Promise<DialogNode[]> {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
            
    //         reader.onload = (event) => {
    //             try {
    //                 const jsonData = JSON.parse(event.target?.result as string);
    //                 const dialogNodes = jsonData.map((node: any) => DialogHelper.parseDialogNode(node));
    //                 resolve(dialogNodes);
    //             } catch (error) {
    //                 reject(new Error("Erreur lors du parsing du fichier JSON : " + error));
    //             }
    //         };

    //         reader.onerror = () => {
    //             reject(new Error("Erreur de lecture du fichier"));
    //         };

    //         reader.readAsText(file);
    //     });
    // }

    // private static parseDialogNode(nodeData: any): DialogNode {
    //     return {
    //         id: nodeData.id,
    //         node_id: nodeData.node_id,
    //         speaker_id: nodeData.speaker_id,
    //         text: nodeData.text,
    //         choices: nodeData.choices ? nodeData.choices.map((choice: any) => DialogHelper.parseDialogChoiceNode(choice)) : [],
    //         next_node: nodeData.next_node ? nodeData.next_node.map((next: any) => DialogHelper.parseDialogNode(next)) : [],
    //         trigger_event: nodeData.trigger_event,
    //         position: nodeData.position, // Add position property
    //         data: nodeData.data // Add data property
    //     };
    // }

    // private static parseDialogChoiceNode(choiceData: any): DialogChoiceNode {
    //     return {
    //         id: choiceData.id,
    //         text: choiceData.text,
    //         next_node: DialogHelper.parseDialogNode(choiceData.next_node),
    //         trigger_event: choiceData.trigger_event,
    //         position: choiceData.position, // Add position property
    //         data: choiceData.data // Add data property
    //     };
    // }
}