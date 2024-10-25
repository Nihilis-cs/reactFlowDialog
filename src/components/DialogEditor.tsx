// DialogEditor.tsx
import React, { useCallback, useState } from 'react';

import DialogNodeComponent from '../nodes/DialogNodeComponent';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    addEdge,
    Node,
    Edge,
    useNodesState,
    useEdgesState,
    type OnConnect,
    Connection,
  } from '@xyflow/react';


// Types pour les DialogNodes et DialogEdges
export type DialogNodeData = {
    text: string;
    choices: { text: string; targetNodeId: string }[];
};

type DialogNodeType = Node<DialogNodeData>;
type DialogEdgeType = Edge;

// Configuration des types de nodes

import { initialNodes, nodeTypes } from '../nodes';
import { initialEdges, edgeTypes } from '../edges';

function DialogEditor() {
    

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect: OnConnect = useCallback(
      (connection) => setEdges((edges) => addEdge(connection, edges)),
      [setEdges]
    );

    return (
        <div style={{ width: '100%', height: '90vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default DialogEditor;
