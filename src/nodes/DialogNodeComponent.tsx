// DialogNodeComponent.tsx
import { Handle, Position } from '@xyflow/react';

type DialogNodeComponentProps = {
    data: {
        text: string;
        choices: { text: string; targetNodeId: string }[];
    };
};
function DialogNodeComponent({ data }: DialogNodeComponentProps) {
    return (
        <div style={{ padding: 10, border: '1px solid #777', borderRadius: 5, width: 200 }}>
            <strong>{data.text}</strong>
            <div style={{ marginTop: 10 }}>
                {data.choices.map((choice, index) => (
                    <div key={index} style={{ marginTop: 5 }}>
                        <button style={{ width: '100%' }}>{choice.text}</button>
                    </div>
                ))}
            </div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default DialogNodeComponent;
