import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode;

export type DialogNode = AppNode & {
    node_id: string;
    speaker_id: string;
    text: string;
    choices: DialogChoiceNode[];
    next_node: DialogNode[];
    trigger_event: string;
};

export type DialogChoiceNode = AppNode & {
    text: string;
    next_node: DialogNode;
    trigger_event: string;
}