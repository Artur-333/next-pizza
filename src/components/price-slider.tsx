'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/dual-slider';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;

}

export const PriceSlider: React.FC<Props> = (props) => {
    const { className } = props;
    const [values, setValues] = useState([0, 5000]);

    return (
        <div className={cn("w-full", className)}>
            <DualRangeSlider
                label={(value) => <span>{value}</span>}
                value={values}
                onValueChange={setValues}
                min={0}
                max={5000}
                step={10}
            />
        </div>
    );
};
